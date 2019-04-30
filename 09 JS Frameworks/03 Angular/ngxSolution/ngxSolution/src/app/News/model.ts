// How to generate without typing:
// Make REST call to using Postman - http://sp2016/_api/web/lists/getByTitle('News')/Items
// Copy Result - Past to http://json2ts.com/
// Shape to your needs

export interface NewsItem {
  Id: number;
  ID: number;
  ContentTypeId: string;
  Title: string;
  Modified: Date;
  Created: Date;
  AuthorId: number;
  EditorId: number;
  Attachments: boolean;
  GUID: string;
  Body?: any;
  Expires?: any;
}
