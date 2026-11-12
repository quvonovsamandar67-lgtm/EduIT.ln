import assert from 'node:assert/strict';
import { isAdminCredentialsValid } from '../app/lib/admin.js';

assert.equal(isAdminCredentialsValid('admin@eduit.ln', 'admin123'), true);
assert.equal(isAdminCredentialsValid('wrong@eduit.ln', 'admin123'), false);
assert.equal(isAdminCredentialsValid('admin@eduit.ln', 'wrongpass'), false);

console.log('admin auth checks passed');
