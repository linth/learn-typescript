import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://www.facebook.com/skm350';

// axios.get(url)
//   .then((response) => {    
//     const html = response.data;
    
//     const $ = cheerio.load(html);

//     // 使用 Cheerio 解析 HTML 內容
//     const posts = $('.userContentWrapper');
    

//     posts.each((index, element) => {
//       const topic = $(element).find('.mbs').text().trim();
//       const event = $(element).find('.timestampContent').text().trim();
//       const label = $(element).find('.label').text().trim();
//       const content = $(element).find('.userContent').text().trim();

//       console.log('--- Post ---');
//       console.log('Topic:', topic);
//       console.log('Event:', event);
//       console.log('Label:', label);
//       console.log('Content:', content);
//       console.log('-------------');
//     });
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });
