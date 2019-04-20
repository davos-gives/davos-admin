import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: "api",
  host: 'https://localhost:4000',
  
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;

      return `${this._super(...arguments)}/me`;
    }

    return this._super(...arguments);
  }
});
