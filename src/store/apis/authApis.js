import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:"auth",
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:5000/auth',
        credentials: 'include',
    }),
    endpoints(builder){
        return {
            setCredentials : builder.mutation({ 
                query: (data) => { 
                  return {
                    url: '/credentials',
                    method: 'PATCH',
                    body: data,     
                  };
                },
            }),
            getCredentials : builder.query({ 
                query: () => { 
                  return {
                    url: '/credentials',
                    method: 'GET',
                  };
                },
            }),
            // logout : builder.mutation({ 
            //   query: () => { 
            //     return {
            //       url: '/logout',
            //       method: 'POST',
            //     };
            //   },
        //   }),
        }
    }
})


export const {useGetCredentialsQuery,useSetCredentialsMutation} = authApi