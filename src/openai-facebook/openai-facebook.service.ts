import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { FacebookPageService } from 'src/facebook-page/facebook-page.service';

@Injectable()
export class OpenaiFacebookService {
  private readonly openai: OpenAI;

  constructor(private readonly facebookService: FacebookPageService) {
    this.openai = new OpenAI({
      apiKey:
        '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',
    });
  }
  async runConversation(userInput: string) {
    const assistantId = 'asst_WB0f3XxQEVyFk4oiu1qpX0ua';
    const thread = await this.openai.beta.threads.create();

    await this.openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: userInput,
    });

    const run = await this.openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });

    let runStatus = await this.openai.beta.threads.runs.retrieve(
      thread.id,
      run.id,
    );

    while (runStatus.status !== 'completed') {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await this.openai.beta.threads.runs.retrieve(
        thread.id,
        run.id,
      );

      if (runStatus.status === 'requires_action') {
        const toolCalls =
          runStatus.required_action?.submit_tool_outputs.tool_calls;
        const toolOutputs = [];

        for (const toolCall of toolCalls || []) {
          if (toolCall.function.name === 'fetch_analytics') {
            console.log(toolCall.function);
            // console.log(toolCall.id);
            // console.log(toolCall.type);
            // const output = await this.fetchAnalytics(
            //   toolCall.function.arguments.query,
            // );
            // toolOutputs.push({ tool_call_id: toolCall.id, output });
          } else if (toolCall.function.name === 'fetch_post_analytics') {
            const args = JSON.parse(toolCall.function.arguments);

            // console.log(args.postId);
            // console.log(toolCall.id);
            // console.log(toolCall.type);
            // console.log(args);
            const data = await this.facebookService.getPostAnalytics(
              args.postId,
              args.pageId,
              args.metric,
              args.since,
              args.until,
            );
            console.log(data);
            const output = JSON.stringify(data.data[0].values[0]);
            console.log(data.data[0].values[0]);
            toolOutputs.push({ tool_call_id: toolCall.id, output });
          } else {
            const args = JSON.parse(toolCall.function.arguments);
            // const output = await this.analyzeResults(args.results);
            console.log(args.postId);
            // console.log("xxx");
            // console.log(toolCall.id);
            // console.log(toolCall.type);
          }
        }
        console.log(toolOutputs);
        await this.openai.beta.threads.runs.submitToolOutputs(
          thread.id,
          run.id,
          {
            tool_outputs: toolOutputs,
          },
        );
      }
    }

    const messages = await this.openai.beta.threads.messages.list(thread.id);
    // const parsedContent = messages.data[0].content[0];
    return messages.data[0].content[0];
  }
}
