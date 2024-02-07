import { SignUpValidation } from './SingUpValidation'
import {useFormik} from 'formik'

let initialvalues={
  name:"",
  email:"",
  password:"",
  cpassword:"",
}

function FormWay1() {
  // const [count, setCount] = useState(0)

  let {values,handleBlur,handleChange,handleSubmit,errors}=useFormik({
    initialValues:initialvalues,
    validationSchema:SignUpValidation,
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  // console.log(formik)

  return (
    <>
   <div >
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>NAME:</label>
      <input type="text" name="name"
      value={values.name}
      onBlur={handleBlur}
      onChange={handleChange}
      />
      <br/>
               {errors.name && <large>{errors.name}</large>}
      <br/>
      <label htmlFor='email'>EMAIL:</label>
      <input type="email" name="email"
       value={values.email}
       onBlur={handleBlur}
       onChange={handleChange}
      />
      <br/>
      {errors.email && <small>{errors.email}</small>}
      <br/>
      <label htmlFor='password'>PASSWORD:</label>
      <input type="password" name="password"
       value={values.password}
       onBlur={handleBlur}
       onChange={handleChange}
       />
      <br/>
      {errors.password && <small>{errors.password}</small>}
      <br/>
      <label htmlFor='cpassword'>CPASSWORD:</label>
      <input type="password" name="cpassword"
       value={values.cpassword}
       onBlur={handleBlur}
       onChange={handleChange}
       />
      <br/>
      {errors.cpassword && <small>{errors.cpassword}</small>}
      <br/>
      <button type="submit" >submit</button>
    </form>
   </div>
    </>
  )
}

export default FormWay1
