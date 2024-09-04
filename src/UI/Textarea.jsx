import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

// Textarea component using React.forwardRef
const Textarea = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...restProps}
    />
  );
});

Textarea.displayName = 'Textarea';

// Define PropTypes for the Textarea component
Textarea.propTypes = {
  className: PropTypes.string,
};

export { Textarea };
