function VisuallyHiddenStyling(props) {
  return (
    <span className="!absolute !p-0 !border-0 !h-1 !w-1 overflow-hidden whitespace-nowrap bg-clip-content">
      {props.text}
    </span>
  );
}
export default VisuallyHiddenStyling;
