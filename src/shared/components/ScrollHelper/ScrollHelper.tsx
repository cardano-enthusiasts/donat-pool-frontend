import classNames from 'classnames';

const ScrollHelper = () => {
  const circleStyles = 'absolute left-0 right-0 my-0 mx-auto w-2.5 h-2.5 bg-yellow rounded-full';
  const arrowStyles = 'absolute bg-yellow bottom-[-3px] rounded-[10px] w-2.5 h-2.5 opacity-0';
  return (
    <div className="absolute left-0 right-0 top-[45vh] mx-auto h-[64px] w-[42px]">
      <div className={circleStyles} />
      <div className={classNames(circleStyles, 'animate-circle2')} />
      <div className={classNames(circleStyles, 'animate-circle3')} />
      <div className={classNames(circleStyles, 'top-[54px] animate-circle4 opacity-0')} />
      <div className="absolute left-0 right-0 top-[36px] mx-auto my-0 h-7 w-2.5 animate-line rounded-[10px] bg-yellow opacity-0" />
      <div className={classNames(arrowStyles, 'right-4 rotate-[-45deg] animate-arrowLeft')} />
      <div className={classNames(arrowStyles, 'left-4 rotate-45 animate-arrowRight')} />
    </div>
  );
};

export { ScrollHelper };
