
# Trackatron
Server to server tracking for affiliate marketers and others that allows for quick creations of postback URLs to be included in an iframe.  Removes barriers surrounding 2nd party cookies from 2019 iOS upate.
## Authors

- [@DwightTheShark](https://www.github.com/DwightTheShark) Nicole Schnurr

## API Reference

#### Facebook
```http
  For FB s2s tracking
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `FBToken` | `string` | **Required**. Facebook token | 
| `FBPixel` | `string` | **Required**. Page pixel ID |

#### TikTok
```http
  For TT s2s tracking
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `TTToken` | `string` | **Required**. TikTok token |
| `TTPixel` | `string` | **Required**. Page pixel ID |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_STRING`

`SENDGRID_API_KEY`

`FROM_EMAIL`

Additionally, you will need to install passport
```bash
npm i passport
```
and Mongoose
```bash
npm i Mongoose
```
Both .js files need to be added to config folder.
## Deployment

To deploy this project run

```bash
  npm start
```


## Demo

![Demo gif](https://i.imgur.com/oRxoQvo.gif)


## Screenshots

![App Screenshot](https://i.imgur.com/T4UyuAs.jpg)

## Add-ons
# To create a custom originating domain
- After generating the postback url with your token and pixel id, ad:
```?url="insert_url_here"```
to the end of the link, where "insert_url_here" is replaced by your originating custom domain.

## Optimizations
- Add Snapchat URLs
- Add javascript pixel events
- Add toggle dark/light modes
- Add teams/collaborator function for affiliate teams
- Work on deduplication for s2s events
