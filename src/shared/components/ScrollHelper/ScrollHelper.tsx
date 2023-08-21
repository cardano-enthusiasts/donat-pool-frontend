import cn from 'classnames';

const ScrollHelper = () => {
  const circleStyles = 'absolute left-0 right-0 my-0 mx-auto w-2.5 h-2.5 bg-yellow rounded-full';
  const arrowStyles = 'absolute bg-yellow bottom-[-3px] rounded-[10px] w-2.5 h-2.5 opacity-0';
  return (
    <div className="absolute left-0 right-0 top-[45vh] mx-auto h-[64px] w-[42px]">
      <div className={circleStyles} />
      <div className={cn(circleStyles, 'animate-circle2')} />
      <div className={cn(circleStyles, 'animate-circle3')} />
      <div className={cn(circleStyles, 'top-[54px] animate-circle4 opacity-0')} />
      <div className="absolute left-0 right-0 top-[36px] mx-auto my-0 h-7 w-2.5 animate-line rounded-[10px] bg-yellow opacity-0" />
      <div className={cn(arrowStyles, 'right-4 rotate-[-45deg] animate-arrowLeft')} />
      <div className={cn(arrowStyles, 'left-4 rotate-45 animate-arrowRight')} />
    </div>
  );
};

export { ScrollHelper };
