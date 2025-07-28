# Component Development Prompts

## 🎯 Component Creation

### New Component Template
When creating a new component, follow this structure:

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  // Define props with clear types
  children?: React.ReactNode;
  className?: string;
  // Add other props as needed
}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('base-classes', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';

export { ComponentName };
```

### Component Checklist:
- [ ] **TypeScript**: Proper type definitions for props
- [ ] **Forward Ref**: Use React.forwardRef for ref forwarding
- [ ] **Display Name**: Set displayName for debugging
- [ ] **Accessibility**: Include proper ARIA attributes
- [ ] **Responsive**: Design for mobile-first
- [ ] **Variants**: Use class-variance-authority for variants
- [ ] **Documentation**: Add JSDoc comments
- [ ] **Testing**: Include unit tests

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices:
```typescript
// Use semantic class names
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'bg-secondary-200 text-secondary-900 hover:bg-secondary-300',
        outline: 'border border-input hover:bg-accent',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 py-2 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
```

### Responsive Design:
```typescript
// Mobile-first approach
className="w-full md:w-auto lg:w-96"
className="text-sm md:text-base lg:text-lg"
className="p-4 md:p-6 lg:p-8"
```

## 🔧 Component Patterns

### Compound Components:
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => (
  <div className={cn('card', className)}>{children}</div>
);

const CardHeader = ({ children, className }: CardProps) => (
  <div className={cn('card-header', className)}>{children}</div>
);

const CardContent = ({ children, className }: CardProps) => (
  <div className={cn('card-content', className)}>{children}</div>
);

Card.Header = CardHeader;
Card.Content = CardContent;

export { Card };
```

### Render Props Pattern:
```typescript
interface RenderPropsComponentProps {
  children: (data: any) => React.ReactNode;
  data: any;
}

const RenderPropsComponent = ({ children, data }: RenderPropsComponentProps) => {
  return <div>{children(data)}</div>;
};
```

### Higher-Order Components:
```typescript
const withLoading = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P & { isLoading?: boolean }) => {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...(props as P)} />;
  };
};
```

## 🧪 Testing Guidelines

### Component Test Template:
```typescript
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName>Test content</ComponentName>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ComponentName className="custom-class">Test</ComponentName>);
    expect(screen.getByText('Test')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<ComponentName ref={ref}>Test</ComponentName>);
    expect(ref).toHaveBeenCalled();
  });
});
```

### Testing Checklist:
- [ ] **Rendering**: Component renders without errors
- [ ] **Props**: Props are applied correctly
- [ ] **Refs**: Ref forwarding works
- [ ] **Events**: Event handlers work
- [ ] **Accessibility**: ARIA attributes are present
- [ ] **Variants**: All variants render correctly
- [ ] **Edge Cases**: Handle edge cases gracefully

## 📱 Accessibility Guidelines

### ARIA Attributes:
```typescript
// For interactive elements
<button
  aria-label="Close dialog"
  aria-expanded={isExpanded}
  aria-controls="dialog-content"
>
  Close
</button>

// For form elements
<input
  aria-describedby="email-error"
  aria-invalid={hasError}
  aria-required="true"
/>
```

### Keyboard Navigation:
```typescript
// Handle keyboard events
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onClick?.();
  }
};
```

## 🚀 Performance Optimization

### Memoization:
```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }: Props) => {
  return <div>{/* Expensive rendering logic */}</div>;
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  // Handle click
}, [dependencies]);
```

### Lazy Loading:
```typescript
// Lazy load components
const LazyComponent = lazy(() => import('./LazyComponent'));

// Use Suspense for loading states
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

## 📚 Documentation

### JSDoc Template:
```typescript
/**
 * ComponentName - A brief description of what the component does
 * 
 * @example
 * ```tsx
 * <ComponentName variant="primary" size="md">
 *   Button text
 * </ComponentName>
 * ```
 * 
 * @param props - Component props
 * @param props.variant - The visual variant of the component
 * @param props.size - The size of the component
 * @param props.children - The content to display
 * @param props.className - Additional CSS classes
 */
```

## 🔄 Component Lifecycle

### Development Process:
1. **Plan**: Define component requirements and API
2. **Design**: Create component interface and types
3. **Implement**: Write component code
4. **Test**: Add unit tests
5. **Document**: Add JSDoc comments
6. **Review**: Code review and feedback
7. **Refactor**: Improve based on feedback
8. **Deploy**: Integrate into application

### Maintenance:
- Keep components small and focused
- Update dependencies regularly
- Monitor performance metrics
- Gather user feedback
- Refactor when needed 
