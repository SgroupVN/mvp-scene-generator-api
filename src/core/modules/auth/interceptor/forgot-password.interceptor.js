import { DefaultValidatorInterceptor } from 'core/system/interceptor';
import { JoiUtils } from 'core/utils';
import Joi from 'joi';

export const forgotPasswordInterceptor = new DefaultValidatorInterceptor(
    Joi.object({
        email: JoiUtils.email().required(),
    })
);
