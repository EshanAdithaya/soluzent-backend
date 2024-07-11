import { OAuthCallbackDto } from './dto/oauth-callback.dto';
import { CallbackService } from './callback.service';
export declare class CallbackController {
    private readonly authService;
    constructor(authService: CallbackService);
    handleOAuthCallback(provider: string, req: any, oAuthCallbackDto: OAuthCallbackDto): Promise<any>;
}
