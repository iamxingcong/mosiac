import React from 'react';
import { Get } from 'react-axios'



function Android() {
    return (<div>
        
        <Get url = "wp-json/wp/v2/posts" >

        {
            (error, response, isLoading, makeRequest, axios) => {
                if (error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                } else if (isLoading) {
                    return (<div>Loading...</div>)
                } else if (response !== null) {
                    return ( < > {
                            response.data.map((user, index) =>
                                <p key={index}>{user.content.rendered}</p>
                            )
                        } <
                        />)
                    }
                    return (<div>Default message before request is made.</div>)
                }
            } 

            </Get> </div>)
}

export default Android