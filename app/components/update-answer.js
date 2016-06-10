import Ember from 'ember';

var clearAvatarChoice = function() {
  $("#pickFrisk").removeClass("selected-avatar");
  $("#pickWendy").removeClass("selected-avatar");
  $("#pickWX").removeClass("selected-avatar");
  $("#pickWillow").removeClass("selected-avatar");
};

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    pickFrisk() {
      clearAvatarChoice();
      this.set('image', "http://i.imgur.com/N14lLz7.jpg");
      this.set('author', "Frisk");
      $("#pickFrisk").addClass("selected-avatar");
    },
    pickWendy() {
      clearAvatarChoice();
      this.set('image', "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-AHgm1nwh0HefYSiO4UW2RKwzg5YFHAAX_rFmWcg49M1PBYOrjA");
      this.set('author', "Wendy");
      $("#pickWendy").addClass("selected-avatar");
    },
    pickWX() {
      clearAvatarChoice();
      this.set('image', "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdRdu7bZA6nbIstLYcSQ1fKgdnsDiWNjNno9Gamv61aEAiX0gi");
      this.set('author', "WX-78");
      $("#pickWX").addClass("selected-avatar");
    },
    pickWillow() {
      clearAvatarChoice();
      this.set('image', "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQo2zeP6I060pnUSTcaleUadffTtoEHcefQNUsY2P4l39y-Z_YiQg");
      this.set('author', "Willow");
      $("#pickWillow").addClass("selected-avatar");
    },
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }

  }
});
