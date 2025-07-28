# Architecture Decision Prompts

## 🏗️ System Architecture

### Project Structure Decisions
When making decisions about project structure, consider:

1. **Scalability**: How will this structure support growth?
2. **Maintainability**: Is the code easy to understand and modify?
3. **Team Collaboration**: Does this structure support multiple developers?
4. **Performance**: Are there any performance implications?
5. **Security**: Are there security considerations for this structure?

### Technology Stack Decisions
When evaluating technology choices, consider:

1. **Community Support**: Is there active community support?
2. **Documentation**: Is the documentation comprehensive and up-to-date?
3. **Performance**: How does this technology perform in production?
4. **Learning Curve**: What's the learning curve for the team?
5. **Long-term Viability**: Is this technology likely to be maintained long-term?

### Database Design Decisions
When designing database schemas, consider:

1. **Normalization**: Is the schema properly normalized?
2. **Performance**: Are there appropriate indexes?
3. **Scalability**: Can this schema handle growth?
4. **Data Integrity**: Are there proper constraints and relationships?
5. **Migration Strategy**: How will schema changes be handled?

## 🎯 Decision Framework

### For Each Architecture Decision:
1. **Problem**: What problem are we solving?
2. **Context**: What are the constraints and requirements?
3. **Options**: What are the available options?
4. **Decision**: What decision was made?
5. **Consequences**: What are the positive and negative consequences?
6. **Implementation**: How will this be implemented?

## 📋 Template for Architecture Decisions

```markdown
# [Decision Title]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
[Describe the problem and context]

## Decision
[Describe the decision made]

## Consequences
### Positive
- [List positive consequences]

### Negative
- [List negative consequences]

### Neutral
- [List neutral consequences]

## Implementation
[Describe implementation details]

## Related
[Link to related decisions or documents]
```

## 🔄 Review Process

### Architecture Review Checklist:
- [ ] Does this decision align with project goals?
- [ ] Are there better alternatives?
- [ ] What are the risks and mitigations?
- [ ] How will this impact the team?
- [ ] What's the rollback plan?
- [ ] How will we measure success?

## 📚 Resources

### Architecture Patterns:
- **MVC**: Model-View-Controller for separation of concerns
- **Repository Pattern**: For data access abstraction
- **Service Layer**: For business logic encapsulation
- **Factory Pattern**: For object creation
- **Observer Pattern**: For event handling
- **Strategy Pattern**: For algorithm selection

### Design Principles:
- **SOLID**: Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion
- **DRY**: Don't repeat yourself
- **KISS**: Keep it simple, stupid
- **YAGNI**: You aren't gonna need it
- **Separation of Concerns**: Each component has a single responsibility

## 🎯 Best Practices

### Code Organization:
- Group related functionality together
- Use clear, descriptive names
- Keep functions and classes small and focused
- Follow consistent naming conventions
- Document complex logic

### Error Handling:
- Handle errors at the appropriate level
- Provide meaningful error messages
- Log errors for debugging
- Don't expose sensitive information
- Have fallback strategies

### Performance:
- Optimize for the common case
- Use appropriate data structures
- Implement caching where beneficial
- Monitor performance metrics
- Profile before optimizing

### Security:
- Validate all inputs
- Use parameterized queries
- Implement proper authentication
- Follow the principle of least privilege
- Keep dependencies updated 
