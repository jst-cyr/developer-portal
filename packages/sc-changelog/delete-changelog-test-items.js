"use strict";
exports.__esModule = true;
const contenthub_one_sdk = require("@sitecore/contenthub-one-sdk");
const contenthub_one_api = require("@sitecore/contenthub-one-api")
require('dotenv').config();;
console.log('START');

//var clientId = process.env.SITECORE_CLIENT_ID;
const clientId = 'A5cLWiOrk5F1h8YH8X00pwaSmazwyOb7'; //TODO:
//var clientSecret = process.env.SITECORE_CLIENT_SECRET;
const clientSecret = 'q72ZsJ4Y1ed6HW6lg_XUWY1EB4zcmfd-JO59CvQqP2JdSSKvkFurWX7-Z4nl5QcX'; //TODO:

//use SDK & Connect
var credentials = new contenthub_one_sdk.ClientCredentialsScheme(clientId, clientSecret);
var client = contenthub_one_sdk.ContentHubOneClientFactory.create(credentials);

//get all items of type changelog 


start();

async function start(){
    console.log('DELETE - Start');
    
    var items = await getItems();
    console.log('Count: ' + items.totalCount);
    console.log('PageSize: ' + items.pageSize);
    console.log('PageNumber: ' + items.pageNumber);
    //console.log(items);

    items.data.forEach( async (item) => {
        console.log(item.name);
        //console.log(item.system);
        if (item.name.startsWith('SEBW-TEST-chlog-')) {
            console.log('Detected candidate...');
            if (item.system.lastPublishProgress != null) {
                if (item.system.lastPublishProgress.type == 'Publish') {
                    //if they are published they need to be unpublished first
                    console.log('Published - do not delete!!! Status:' + item.system.lastPublishProgress.status);
                } else if (item.system.lastPublishProgress.type = 'Unpublish') {
                    console.log('Unpublished - will be deleted now!!! Status:' + item.system.lastPublishProgress.status);
                    await deleteItem(item.id);
                }

            } else {
                console.log('Not Published - will be deleted now!!!');
                await deleteItem(item.id);
            }

            
        } else {
            console.log('Do not delete me please, I am not the one you were searching for');
        }

        console.log(item.fields.title.value);
        console.log('-------');

    })
    

    //items.forEach()

    console.log('DELETE - end');
}
async function getItems() {
    var items = await client.contentItems.getAsync(new contenthub_one_sdk.ContentItemSearchRequest().withFieldQuery(
        contenthub_one_sdk.ContentItemSearchField.contentType,
        contenthub_one_sdk.Equality.Equals,
        "changelog"
    ));
    return items;
}

async function deleteItem(id) {
    var a = client.contentItems.deleteAsync(id);
}