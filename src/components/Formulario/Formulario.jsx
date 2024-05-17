import React,{useReducer} from 'react'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};


const reducer=(state,action)=>{
    return{
        ...state,
    [action.type] : action.payload,

            };
}


const Formulario=()=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    let validar=null;
    const validarForm=(event)=>{
        const { name, value } = event.target;
        if(name==="email"){
            if(value){
                if(value.length<8){
                    validar = false;
                }else validar = null;
            }
        }else{if(value){
            if(value.length<2){
                validar = false;
            }else validar = null;
        }}
        
        dispatch({
            type: name,
            payload: {value,
                    error: validar
            }
        });
        console.log(name)
    }


    console.log(state.firstName);

    return(
        <>
        <div>
            <label htmlFor="firstName">FirstName: </label>
            <input type="text" name="firstName" id="firstName" onChange={validarForm}/>
            {state.firstName.error!==null &&(<p className='error'>FirstName error</p>)}
        </div>
        <div>
            <label htmlFor="lastName">LastName: </label>
            <input type="text" name="lastName" id="lastName" onChange={validarForm}/>
            {state.lastName.error!==null &&(<p className='error'>LastName error</p>)}
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" onChange={validarForm}/>
            {state.email.error!==null &&(<p className='error'>Email error</p>)}
        </div>
        <button type='submit'>Submit</button>
        </>
    )
}


export default Formulario