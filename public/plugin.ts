import { CoreSetup, CoreStart, Plugin, PluginInitializerContext } from 'kibana/public';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PersistedBannerPluginSetup {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PersistedBannerPluginStart {}

export interface PublicConfigType {
  backgroundColor: string;
  text: string;
}

export class PersistedBannerPlugin
  implements Plugin<PersistedBannerPluginSetup, PersistedBannerPluginStart> {
  private config: PublicConfigType;

  constructor(initializerContext: PluginInitializerContext) {
    this.config = initializerContext.config.get<PublicConfigType>();
  }

  public setup(core: CoreSetup) {
    return {};
  }

  public start(core: CoreStart): PersistedBannerPluginStart {
    const { text, backgroundColor } = this.config;
    const styles = `
      body::after {
        content: "${text}";
        position: fixed;
        top: 0;
        padding: 2px;
        z-index: 99999999;
        width: 100%;
        background-color: ${backgroundColor};
        text-align: center;
        font-weight: bold;
      }
      #kibana-body:after {
        content: "${text}";
        position: fixed;
        bottom: 0;
        padding: 2px;
        z-index: 99999999;
        width: 100%;
        background-color: ${backgroundColor};
        text-align: center;
        font-weight: bold;
      }
    `;

    const css = document.createElement('style');
    css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName('head')[0].appendChild(css);

    return {};
  }

  public stop() {}
}
