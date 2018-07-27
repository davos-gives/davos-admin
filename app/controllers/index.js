import Controller from '@ember/controller';

export default Controller.extend({actions: {
  saveRecurring(model) {
    model.save();
  }
}
});
