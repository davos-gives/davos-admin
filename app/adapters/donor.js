import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: "api",
  host: 'https://app.davos.gives',

  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;

      return `${this._super(...arguments)}/me`;
    }

    return this._super(...arguments);
  }
});
