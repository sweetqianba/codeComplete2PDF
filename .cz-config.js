'use strict';

module.exports = {
  types: [
    {
      value: '✨ Feat',
      name : 'Feat: A new feature'
    },
    {
      value: '🐞 Fix',
      name : 'Fix: A bug fix'
    },
    {
      value: '🚚 Merge',
      name : 'Merge: Incorporates changes into the current branch'
    },
    {
      value: '🔧 Refactor',
      name : 'Refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: '📚 Docs',
      name : 'Docs: Documentation only changes'
    },
    {
      value: '✅ Test',
      name : 'Test: Add missing tests or correcting existing tests'
    },
    {
      value: '💬 Chore',
      name : 'Chore: Changes that don\'t modify src or test files. Such as updating build tasks, package manager'
    },
    {
      value: '💄 Style',
      name : 'Style: Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: '⏪ Revert',
      name : 'Revert: Revert to a commit'
    }
  ],
  scopes: [],
  upperCaseSubject: true,
  skipQuestions: ["body", "footer"],
};
