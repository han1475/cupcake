/**
 * readmore
 */
function readmore(obj){
    if (obj.value=="readmore"){
        obj.parentNode.getElementsByClassName('post-summary')[0].style.display="none";
        obj.parentNode.getElementsByClassName('post-content')[0].style.display="block";
        obj.innerHTML="收起";
        obj.value="summary";
    }else{
        obj.parentNode.getElementsByClassName('post-summary')[0].style.display="block";
        obj.parentNode.getElementsByClassName('post-content')[0].style.display="none";
        obj.innerHTML="阅读更多";
        obj.value="readmore";
    }
}

/**
 * highlight
 */
var highlight = function () {
    document.querySelectorAll('.chroma>table')
      .forEach((element) => {
        const sub = element.querySelector('code[data-lang]');
        if (sub !== null) {
          element.setAttribute('data-lang', mapLang(sub.getAttribute('data-lang')));
        }
    });
}
function mapLang(name) {
    return {
      coffeescript: 'CoffeeScript',
      cpp: 'C++',
      cs: 'C#',
      css: 'CSS',
      html: 'HTML',
      http: 'HTTP',
      js: 'JavaScript',
      json: 'JSON',
      objectivec: 'Objective-C',
      php: 'PHP',
      sql: 'SQL',
      toml: 'TOML',
      ts: 'TypeScript',
      typescript: 'TypeScript',
      xml: 'XML',
      yaml: 'YAML',
    }[name] || name;
  }
highlight();

