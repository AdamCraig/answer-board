import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note'),
        image: this.get('image'),
      };
      this.sendAction('saveQuestion', params);
      this.set('content', "");
      this.set('author', "");
      this.set('note', "");
      this.set('image', "");
    }
  }
});
