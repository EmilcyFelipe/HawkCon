import {useState,createContext} from 'react';

export const UserContext = createContext({});

export default function UserDataProvider({children}){
    const [ user, setUser ] = useState(
        {
          nome: 'Felipe',
          disciplinas:[
            {
              nome: 'Portugues',
              rendimentoGeral: '80/100',
              conteudo:[{
                nome: 'pronome',
                rendimento: '90/100',
                desempenho:[
                  {
                    id:'01',
                    data: '05/10/2001',
                    rendimento: '60/100'
                  }
                ]
              },
              {
                nome: 'Acentuação',
                rendimento: '90/100',
                desempenho:[
                  {
                    id:'01',
                    data: '05/10/2001',
                    rendimento: '60/100'
                  }
                ]
              },
            
            ]
            },
            {
              nome: 'Racioncínio Lógico',
              rendimentoGeral: '80/100',
              conteudo:[{
                nome: 'Probabilidade',
                rendimento: '90/100',
                desempenho:[
                  {
                    id:'01',
                    data: '05/10/2001',
                    rendimento: '60/100'
                  }
                ]
              },
              {
                nome: 'Combinatória',
                rendimento: '90/100',
                desempenho:[
                  {
                    id:'01',
                    data: '05/10/2001',
                    rendimento: '60/100'
                  }
                ]
              },
            
            ]
            }
          ]
        }
      );


    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}