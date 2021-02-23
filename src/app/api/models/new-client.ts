/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Client, 'id'>, schemaOptions: { title: 'NewClient', exclude: [ 'id' ] })
 */
export interface NewClient {
  mail: string;
  name: string;
  phone: string;

  [key: string]: any;
}
