export const FormGroup = ({ children }) => (
  <div className="form-group mb-6">{children}</div>
);

export const Label = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    className="form-label inline-block mb-2 text-gray-700"
  >
    {children}
  </label>
);

export const Input = ({ register, ...rest }) => (
  <input
    {...rest}
    {...register}
    className="form-control
    disabled:bg-slate-100
                block
                w-full
                px-3
                py-1.5
                text-basexw
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 
                focus:bg-white 
                focus:border-blue-600 
                focus:outline-none"
  />
);
