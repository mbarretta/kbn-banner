import { schema, TypeOf } from '@kbn/config-schema';
import { PluginConfigDescriptor, PluginInitializerContext } from 'kibana/server';
import { PersistedBannerPlugin } from './plugin';

const configSchema = schema.object({
  text: schema.string({ defaultValue: 'Configure with with header_footer.* configuration' }),
  backgroundColor: schema.string({ defaultValue: 'yellow' }),
});

export type PersistedBannerConfigType = TypeOf<typeof configSchema>;

export const config: PluginConfigDescriptor<PersistedBannerConfigType> = {
  exposeToBrowser: {
    text: true,
    backgroundColor: true,
  },
  schema: configSchema,
};

export function plugin(initializerContext: PluginInitializerContext) {
  return new PersistedBannerPlugin(initializerContext);
}
