const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    // <div className="form-control w-full max-w-xs">
    <div className="form-control ">
      <label className="label">
        {/* <span className="label-text">What is your name?</span> */}
        <span className="label-text">{label}</span>
        {/* <span className="label-text-alt">Top Right label</span> */}
      </label>
      <input
        // type="text"
        type={type}
        name={name}
        defaultValue={defaultValue}
        // placeholder="Type here"
        // className="input input-bordered w-full max-w-xs"
        className="input input-bordered "
      />
      {/* <label className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </label> */}
    </div>
  );
};
export default FormInput;
