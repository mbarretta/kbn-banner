import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../src/core/server';

import { PersistedBannerConfigType } from './';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PersistedBannerPluginSetup {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PersistedBannerPluginStart {}

export class PersistedBannerPlugin
  implements Plugin<PersistedBannerPluginSetup, PersistedBannerPluginStart> {
  constructor(private readonly initializerContext: PluginInitializerContext) {}

  public async setup(core: CoreSetup) {
    await this.initializerContext.config.create<PersistedBannerConfigType>();
    return {};
  }

  public start(core: CoreStart) {
    return {};
  }

  public stop() {}
}
