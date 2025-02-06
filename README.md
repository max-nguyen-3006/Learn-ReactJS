# Learn-ReactJS
Learn ReactJS

1. Github :  Lưu trữ source code 
2. NpmJS : Nơi deploy source
3. Unpkg : CDN : để tải link source nhanh , khi ở bất cứ đâu
==== React JS
1.  React.createElement(type, props, children, n); 
- Children cũng tính là 1 props , nhưng React tách ra thôi
2. React-DOM : Liên kết giữa React và DOM 
-  ReactDOM.render(ReactElement,container) 
3. JSX : Javascript XML : Hỗ trợ viết html, xml trong file js.
4. Babel : (ES6 -> ES5) 
 +  Thư viện dùng để chuyển đổi JSX -> JS
 +  Không hỗ trợ render 2 elements cùng lúc => phải wrap chúng lại : React.Fragment 
5. React element types: string, function/class
6. Props : Object chứa thuộc tính mà element chúng ta tạo ra 
    + Xem như là đối số của function
    + Callback : truyền function vào đối số của function khác.
    Example : <PostItem callback = {(random) => {log(random)}} />
             function PostItem(props) { 
                props.callback(Math.random())
             }
7. DOM event 
8. Children props & Render props  
9. Webpack : Module hóa files. Import , Export. Mini file, combine files lại.
======
1. NPM    
2. Yarn
=== Folder Structure
1. Public : Allow access from internet