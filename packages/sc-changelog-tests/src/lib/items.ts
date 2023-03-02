import { ContentItem, ContentItemSearchField, ContentItemSearchRequest, Equality, IContentHubOneClient } from '@sitecore/contenthub-one-sdk';

export async function getItems(client: IContentHubOneClient, contentType: string) {
  const items = await client.contentItems.getAsync(new ContentItemSearchRequest().withFieldQuery(ContentItemSearchField.contentType, Equality.Equals, contentType));
  return items;
}

export async function deleteItem(client: IContentHubOneClient, id: string) {
  await client.contentItems.deleteAsync(id);
}

export async function createItem(client: IContentHubOneClient, contentType: string, contentItem: ContentItem) {
  const newContentItem = await client.contentItems.createAsync(contentType, contentItem);
  return newContentItem;
}
