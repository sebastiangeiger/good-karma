'use strict';

describe('The Default Homepage', function () {

  it('should say "Enjoy coding!"', function() {
    browser().navigateTo('/');
    expect(element('h3').text()).toContain('Enjoy coding! - Yeoman');
  });

});
