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

/**
 * search
 */
function search() {
  var keyword = document.getElementById("search-input").value
  document.querySelectorAll("div.post-panel")
  .forEach((el)=>{
    if (el.textContent.toLowerCase().indexOf(keyword.toLowerCase()) < 0) {
      el.style.display="none"
    }else{
      el.style.display="block"
    }
  })
}

/**
 * categories
 */
function cat(obj) {
  var keyword = obj.textContent
  document.querySelectorAll("div.post-panel")
    .forEach((el) => {
      if (el.querySelector("a#categories").textContent===keyword) {
        el.style.display = "block"
      } else {
        el.style.display = "none"
      }
    })
}

/** 
 * tags
 */
function tags(obj) {
  var flag = false;
  var keyword = obj.textContent
  document.querySelectorAll("div.post-panel")
    .forEach((el) => {
      el.style.display="none"
      el.querySelectorAll("a.tag")
        .forEach((tag) => {
          if (tag.textContent===keyword) {
            el.style.display="block"
          }
        })
    })
}