const PasswordStrengthMeter = (props: any) => {
  const {value, max, height} = props;

  return(
    <div className={`flex w-full gap-2`}>
      { Array(max ? max : 4).fill(0).map((_, i) => {
        return(
          <div key={i} style={{height:height}} className={` ${i < value ? "bg-green-primary" : "bg-[color:#E2E2EA]"} h-1.5 w-full rounded-full`}> </div>
        );
        })
      }
    </div>
  );
}

export default PasswordStrengthMeter;
