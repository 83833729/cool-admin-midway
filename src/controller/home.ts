import { Get, Provide, Inject, Query } from '@midwayjs/decorator';
import { CoolController, CoolCache } from 'midwayjs-cool-core';

@Provide()
@CoolController()
export class HomeController {
  @Inject('cool-core:coolCache')
  coolCache: CoolCache;

  @Get('/1')
  async home(@Query() data: string) {
    console.log(await this.coolCache.set('a', data))
    return await this.coolCache.get('a');
  }
}
