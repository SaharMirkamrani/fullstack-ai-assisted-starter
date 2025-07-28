# Code Refactoring Prompts

## 🔍 Code Analysis

### Before Refactoring Checklist:
- [ ] **Identify Issues**: What problems does the code have?
- [ ] **Measure Impact**: How does this affect performance/maintainability?
- [ ] **Plan Changes**: What specific improvements are needed?
- [ ] **Test Coverage**: Are there sufficient tests to validate changes?
- [ ] **Documentation**: Is the current code well-documented?

### Common Code Smells:
1. **Long Functions**: Functions with too many responsibilities
2. **Large Classes**: Classes that do too many things
3. **Duplicate Code**: Repeated logic across multiple places
4. **Magic Numbers**: Hard-coded values without explanation
5. **Deep Nesting**: Excessive if/else or loop nesting
6. **Poor Naming**: Unclear variable, function, or class names
7. **Tight Coupling**: Components that depend too much on each other
8. **Dead Code**: Unused functions, variables, or imports

## 🎯 Refactoring Strategies

### Extract Method/Function
**When**: A function is doing too many things or has repeated logic.

```typescript
// Before
const processUserData = (user: User) => {
  // Validate user data
  if (!user.email || !user.email.includes('@')) {
    throw new Error('Invalid email');
  }
  if (!user.name || user.name.length < 2) {
    throw new Error('Name too short');
  }
  
  // Process user data
  const processedUser = {
    ...user,
    email: user.email.toLowerCase(),
    name: user.name.trim(),
    createdAt: new Date(),
  };
  
  // Save to database
  return saveUser(processedUser);
};

// After
const validateUser = (user: User): void => {
  if (!user.email || !user.email.includes('@')) {
    throw new Error('Invalid email');
  }
  if (!user.name || user.name.length < 2) {
    throw new Error('Name too short');
  }
};

const processUserData = (user: User) => {
  validateUser(user);
  
  const processedUser = {
    ...user,
    email: user.email.toLowerCase(),
    name: user.name.trim(),
    createdAt: new Date(),
  };
  
  return saveUser(processedUser);
};
```

### Extract Class/Component
**When**: A class or component has too many responsibilities.

```typescript
// Before
class UserManager {
  validateUser(user: User) { /* ... */ }
  saveUser(user: User) { /* ... */ }
  sendEmail(user: User) { /* ... */ }
  generateReport() { /* ... */ }
  backupData() { /* ... */ }
}

// After
class UserValidator {
  validateUser(user: User) { /* ... */ }
}

class UserRepository {
  saveUser(user: User) { /* ... */ }
  backupData() { /* ... */ }
}

class EmailService {
  sendEmail(user: User) { /* ... */ }
}

class ReportGenerator {
  generateReport() { /* ... */ }
}
```

### Replace Magic Numbers with Constants
**When**: Code contains hard-coded values that have meaning.

```typescript
// Before
const validatePassword = (password: string) => {
  return password.length >= 8 && 
         password.length <= 128 &&
         /[A-Z]/.test(password) &&
         /[a-z]/.test(password) &&
         /[0-9]/.test(password);
};

// After
const PASSWORD_CONSTRAINTS = {
  MIN_LENGTH: 8,
  MAX_LENGTH: 128,
  REQUIRE_UPPERCASE: true,
  REQUIRE_LOWERCASE: true,
  REQUIRE_NUMBERS: true,
} as const;

const validatePassword = (password: string) => {
  return password.length >= PASSWORD_CONSTRAINTS.MIN_LENGTH &&
         password.length <= PASSWORD_CONSTRAINTS.MAX_LENGTH &&
         (!PASSWORD_CONSTRAINTS.REQUIRE_UPPERCASE || /[A-Z]/.test(password)) &&
         (!PASSWORD_CONSTRAINTS.REQUIRE_LOWERCASE || /[a-z]/.test(password)) &&
         (!PASSWORD_CONSTRAINTS.REQUIRE_NUMBERS || /[0-9]/.test(password));
};
```

### Simplify Conditional Logic
**When**: Complex if/else statements or nested conditions.

```typescript
// Before
const getDiscount = (user: User, order: Order) => {
  if (user.type === 'VIP') {
    if (order.total > 1000) {
      return 0.20;
    } else if (order.total > 500) {
      return 0.15;
    } else {
      return 0.10;
    }
  } else if (user.type === 'PREMIUM') {
    if (order.total > 1000) {
      return 0.15;
    } else if (order.total > 500) {
      return 0.10;
    } else {
      return 0.05;
    }
  } else {
    return 0;
  }
};

// After
const DISCOUNT_RULES = {
  VIP: {
    1000: 0.20,
    500: 0.15,
    0: 0.10,
  },
  PREMIUM: {
    1000: 0.15,
    500: 0.10,
    0: 0.05,
  },
  REGULAR: {
    0: 0,
  },
} as const;

const getDiscount = (user: User, order: Order) => {
  const rules = DISCOUNT_RULES[user.type] || DISCOUNT_RULES.REGULAR;
  
  for (const [threshold, discount] of Object.entries(rules)) {
    if (order.total > Number(threshold)) {
      return discount;
    }
  }
  
  return rules[0];
};
```

## 🧪 Testing During Refactoring

### Test-First Approach:
1. **Write Tests**: Ensure existing functionality is covered
2. **Run Tests**: Verify all tests pass before refactoring
3. **Refactor**: Make changes incrementally
4. **Test Again**: Ensure tests still pass after each change
5. **Repeat**: Continue until refactoring is complete

### Test Template:
```typescript
describe('Refactored Function', () => {
  it('should maintain existing behavior', () => {
    const input = { /* test data */ };
    const expected = { /* expected result */ };
    
    const result = refactoredFunction(input);
    
    expect(result).toEqual(expected);
  });
  
  it('should handle edge cases', () => {
    // Test edge cases
  });
  
  it('should be more performant', () => {
    const start = performance.now();
    refactoredFunction(testData);
    const end = performance.now();
    
    expect(end - start).toBeLessThan(acceptableThreshold);
  });
});
```

## 📊 Performance Optimization

### Identify Bottlenecks:
```typescript
// Before: O(n²) complexity
const findDuplicates = (array: number[]) => {
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicates.includes(array[i])) {
        duplicates.push(array[i]);
      }
    }
  }
  return duplicates;
};

// After: O(n) complexity
const findDuplicates = (array: number[]) => {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const item of array) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  
  return Array.from(duplicates);
};
```

### Memory Optimization:
```typescript
// Before: Creating unnecessary objects
const processItems = (items: Item[]) => {
  return items.map(item => ({
    id: item.id,
    name: item.name,
    processed: true,
    timestamp: new Date(),
  }));
};

// After: Only create objects when needed
const processItems = (items: Item[]) => {
  return items.map(item => 
    item.processed 
      ? item 
      : {
          ...item,
          processed: true,
          timestamp: new Date(),
        }
  );
};
```

## 🔧 TypeScript Improvements

### Better Type Safety:
```typescript
// Before: Using 'any'
const processData = (data: any) => {
  return data.map((item: any) => ({
    id: item.id,
    name: item.name,
  }));
};

// After: Proper typing
interface DataItem {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface ProcessedItem {
  id: string;
  name: string;
}

const processData = (data: DataItem[]): ProcessedItem[] => {
  return data.map(item => ({
    id: item.id,
    name: item.name,
  }));
};
```

### Union Types and Discriminated Unions:
```typescript
// Before: String-based type checking
interface User {
  type: string;
  data: any;
}

const processUser = (user: User) => {
  if (user.type === 'admin') {
    return processAdminData(user.data);
  } else if (user.type === 'regular') {
    return processRegularData(user.data);
  }
};

// After: Discriminated union
interface AdminUser {
  type: 'admin';
  permissions: string[];
  role: string;
}

interface RegularUser {
  type: 'regular';
  preferences: Record<string, unknown>;
}

type User = AdminUser | RegularUser;

const processUser = (user: User) => {
  switch (user.type) {
    case 'admin':
      return processAdminData(user.permissions, user.role);
    case 'regular':
      return processRegularData(user.preferences);
  }
};
```

## 📚 Documentation Improvements

### Better Comments:
```typescript
// Before: Obvious comments
const user = getUserById(id); // Get user by ID

// After: Explain why, not what
const user = getUserById(id); // Required for permission check

// Before: No explanation for complex logic
const discount = order.total > 1000 ? 0.20 : 0.10;

// After: Explain business logic
const discount = order.total > 1000 ? 0.20 : 0.10; // VIP discount for orders over $1000
```

### JSDoc Improvements:
```typescript
/**
 * Calculates the discount for a user's order based on their membership level
 * and order total.
 * 
 * @param user - The user making the order
 * @param order - The order details including total amount
 * @returns The discount percentage as a decimal (e.g., 0.20 for 20%)
 * 
 * @example
 * ```typescript
 * const discount = getDiscount(vipUser, { total: 1500 });
 * console.log(discount); // 0.20
 * ```
 * 
 * @throws {Error} When user type is invalid
 */
const getDiscount = (user: User, order: Order): number => {
  // Implementation
};
```

## 🔄 Refactoring Workflow

### Step-by-Step Process:
1. **Analyze**: Identify code smells and improvement opportunities
2. **Plan**: Create a refactoring plan with specific goals
3. **Test**: Ensure comprehensive test coverage
4. **Refactor**: Make changes incrementally
5. **Verify**: Run tests and validate functionality
6. **Document**: Update documentation and comments
7. **Review**: Code review and feedback
8. **Deploy**: Deploy changes safely

### Safety Measures:
- **Version Control**: Use feature branches for refactoring
- **Incremental Changes**: Make small, focused changes
- **Automated Testing**: Run tests after each change
- **Code Review**: Get feedback from team members
- **Rollback Plan**: Have a plan to revert if needed

## 🎯 Success Metrics

### Measurable Improvements:
- **Performance**: Reduced execution time or memory usage
- **Maintainability**: Reduced cyclomatic complexity
- **Readability**: Improved code clarity and structure
- **Testability**: Easier to write and maintain tests
- **Reusability**: More modular and reusable code

### Quality Indicators:
- **Code Coverage**: Maintained or improved test coverage
- **Linting**: No new linting errors or warnings
- **Type Safety**: Improved TypeScript type coverage
- **Documentation**: Better inline and external documentation
- **Team Feedback**: Positive feedback from code reviews 
