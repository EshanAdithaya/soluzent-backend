// src/openai/openai.service.ts
import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor() {
    if (!this.openai) {
      this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }
  }
  async createAssistant(): Promise<string> {
    // Check if an assistant already exists, and return its ID if so
    const assistantId = process.env.OPENAI_ASSISTANT_ID;
    if (assistantId) {
      return assistantId;
    }

    // Create a new assistant with specific instructions
    const instructions = `
      You are an assistant that helps identify metrics for Facebook analytics.
      Your task is to analyze user queries and determine the required metrics and the type of analytics (page or post).
      Here are the specific metric names you should use:

      Page metrics:
      - page_impressions
      - page_engaged_users
      - page_fans
      - page_post_engagements
      - page_video_views
      - page_actions_post_reactions_total
      - page_total_actions

      Post metrics:
      - post_impressions
      - post_engaged_users
      - post_reactions
      - post_comments
      - post_shares
      - post_clicks

      Format your response as follows:
      {
        "metrics": "comma-separated list of metrics",
        "type": "page or post"
      }
    `;

    const response = await this.openai.beta.assistants.create({
      name: 'Insights Metrics GPT',
      model: 'gpt-3.5-turbo',
      instructions: instructions,
    });

    const newAssistantId = response.id;

    // Store the assistant ID in the environment variables
    process.env.OPENAI_ASSISTANT_ID = newAssistantId;

    return newAssistantId;
  }
  async fetchMetrics(query: string, assistantId: string) {
    const thread = await this.openai.beta.threads.create();

    // const message = await this.openai.beta.threads.messages.create(thread.id, {
    //   role: 'user',
    //   content: query,
    // });
    const run = await this.openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistantId,
      instructions:
        'Please address the user as Jane Doe. The user has a premium account.',
    });
    if (run.status === 'completed') {
      const messages = await this.openai.beta.threads.messages.list(
        run.thread_id,
      );
      for (const message of messages.data.reverse()) {
        console.log(`${message.role} > ${message.content[0]}`);
      }
    } else {
      console.log(run.status);
    }
    // const result = message.data.choices[0].text.trim();
    // return JSON.parse(result);
  }

  //   async generateChart(data: any): Promise<string> {
  //     const response = await this.openai.beta.threads.messages.create({
  //       model: 'gpt-3.5-turbo',
  //       prompt: `
  //         You are an assistant that generates charts for given data.
  //         Data: ${JSON.stringify(data)}
  //         Output the chart representation:
  //       `,
  //       max_tokens: 200,
  //     });

  //     return response.data.choices[0].text.trim();
  //   }
}
