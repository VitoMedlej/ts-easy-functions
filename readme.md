# Typescript - Easy - Functions
**ts-easy-functions** is a very minimal JavaScript/Typescript library that helps you avoid rewriting annoying repetitive code. 

**Primarily** built for react apps. You can now stop writing the same local Storage, fetch functions everytime in every GitHub repo. 


# Installation

    npm i ts-easy-functions
    
	yarn add ts-easy-functions

 
 

## Usage

**Fetch: *Get Request***

    import { HttpClient } from 'ts-easy-functions';
    
    const httpClient = new HttpClient();
   

       const fetchData = async () => {
              try {
                const response = await httpClient.get('https://www.myurl.com');
                return response;
              } catch (error) {
                console.error('Failed to fetch data:', error);
              }
            };



**Fetch: *Post Request***

    import { HttpClient } from 'ts-easy-functions';
    
    const httpClient = new HttpClient();
   

       const fetchData = async () => {
              try {
           const  client = new  HttpClient()

		   const  result = await  client.post('https://www.myurl.com', {values});
		   return result;
                  } catch (error) {
                    console.error('Failed to fetch data:', error);
                  }
                };


> 

**Github repo:** [https://github.com/VitoMedlej/ts-easy-functions](https://github.com/VitoMedlej/easy-ts-functions)