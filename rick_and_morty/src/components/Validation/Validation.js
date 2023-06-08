
export default (data) => {
    let errors = {};

    if(!data.email.includes("@")){
        errors.e1 = <span className='error'>Email no valido</span>;
    }
    if(!data.email){
        errors.e2 = <span className='error'>Ingrese Email</span>;
    }
    if(data.email.length > 30){
        errors.e3 = <span className='error'>Mucho texto</span>;
    }
    if(!/\d/.test(data.password)){
        errors.p1 = <span className='error'>Al menos debe tener un numero</span>
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = <span className='error'>Debe tener entre 6 y 20 caracteres</span>
    }

    
    return errors
};