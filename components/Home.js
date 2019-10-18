import React from 'react';

import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import Header from './Header';
import Tweet from './Tweet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const tweetButton = <Icon size={24} color="white" name="pencil" />;

let id = 0;
const posts = [
  {
    handle: '@theOnion',
    name: 'The Onion',
    photoUrl:
      'https://s3-prod.chicagobusiness.com/s3fs-public/NEWS06-180719976-AR.jpeg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
  {
    handle: '@DHH',
    name: 'DHH',
    photoUrl:
      'https://pbs.twimg.com/profile_images/975876868455809024/eK7mDppU.jpg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
  {
    handle: '@theOnion',
    name: 'The Onion',
    photoUrl:
      'https://s3-prod.chicagobusiness.com/s3fs-public/NEWS06-180719976-AR.jpeg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
  {
    handle: '@theOnion',
    name: 'The Onion',
    photoUrl:
      'https://s3-prod.chicagobusiness.com/s3fs-public/NEWS06-180719976-AR.jpeg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
  {
    handle: '@theOnion',
    name: 'The Onion',
    photoUrl:
      'https://s3-prod.chicagobusiness.com/s3fs-public/NEWS06-180719976-AR.jpeg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
  {
    handle: '@theOnion',
    name: 'The Onion',
    photoUrl:
      'https://s3-prod.chicagobusiness.com/s3fs-public/NEWS06-180719976-AR.jpeg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
  {
    handle: '@theOnion',
    name: 'The Onion',
    photoUrl:
      'https://s3-prod.chicagobusiness.com/s3fs-public/NEWS06-180719976-AR.jpeg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
  {
    handle: '@theOnion',
    name: 'The Onion',
    photoUrl:
      'https://s3-prod.chicagobusiness.com/s3fs-public/NEWS06-180719976-AR.jpeg',
    tweetContent: `ft beer DIY stumptown biodiesel YOLO bespoke you probably haven't heard of them Echo Park VHS crucifix fanny pack sriracha sartorial salvia vegan normcore swag cred Schlitz +1 mustache Wes Anderson dreamcatcher bitters gentrify fixie XOXO s`,
    id: ++id,
  },
];

export default Home = () => {
  return (
    <>
      <Header activeRoute="Home" />
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <Tweet
            accName={item.name}
            handle={item.handle}
            photoUrl={item.photoUrl}
            tweetContent={item.tweetContent}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />

      <TouchableOpacity
        style={{
          padding: 20,
        //   width:"25%",
        //   position: 'absolute',
          alignSelf: 'flex-end',
          // right:'50%',
          // textAlign:'center',
          backgroundColor: 'red',
        }}>
        {tweetButton}
      </TouchableOpacity>
    </>
  );
};
