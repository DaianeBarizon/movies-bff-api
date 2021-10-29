import React from 'react';
import { Text } from '../../Text';
import { HeaderWrapper } from './styles';
import { Button } from '../../Button';
import { movies } from 'popcorntime';
import imdb from 'imdb-api'

interface Props {}

export const Header =  (props: Props) => {
    const options = {
        page: 1,
        sortby: 'seeds',
        genre: 'all',
        q: '' // It is useful to do a search or you can leave it empty
      };
    const data =  movies(options);
    console.log('data', data)

    movies(options).then((data) => console.log('api', data));

    /* const apiImdb = imdb.get({name: 'The Toxic Avenger'}, {apiKey: 'foo', timeout: 30000}).then((data) => console.log('aqui', data)).catch((erro) => console.log('error', erro));
 
    console.log('apiImdb', apiImdb) */

    return (
        <HeaderWrapper>
            <Text as='h1' fontWeight='light' fontSize='45px' m='0'>
                Watch Movies and TV Shows Instantly
            </Text>
            <Text
                as='h2'
                fontWeight='light'
                fontSize='30px'
                color='green'
                m='0'
            >
                Currently in Beta, but go ahead and try it!
            </Text>
            <Button mt='20px' onClick={() => alert('clique')}>
                <Text color='white' fontSize='25px' fontWeight='medium'>
                    Download Popcorn Time 4.4
                </Text>
            </Button>
            <Text
                as='small'
                fontWeight='light'
                fontSize='13px'
                color='red'
                mt='13px'
            >
                For Windows 7 and above Other operating systems and platforms
            </Text>
        </HeaderWrapper>
    );
};
