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
8. Children props & Render props : important:     
  + <button>Click me !</button> : children . 
  + Render props : Tuyền function qua props: ở component cha sẽ nhận       children. 
  + 

9. Webpack : Module hóa files. Import , Export. Mini file, combine files lại.
======
1. NPM    
2. Yarn
=== Folder Structure
1. Public : Allow access from internet
======
*. Hooks : Là những method, function viết sẵn bởi react -> gắn vào component để sài. có từ react 16.8.0
  + Chỉ dùng cho function component.
1. useState: thay đổi trạng thái của data thì UI tự động được cập nhật
2. Mounted & Unmounted
3. useEffect : 
. SetSate: Chỉ khi set data mới thì react mới re-render lại page .
. AddEventListener - Cleanup function.
. Timer : SetInterval - SetTimeOut 
4.Memo
5. UseCallback
6. UseMemo
7. UseContext
8. UseRef
9. UseLayoutEffect
10. UseReducer : Pending
11. UseImpresive  ? : Pending
======= 
1. CSS: 
  + Khi build thì react sẽ gom thành 1 file css .
  + Nếu import Css theo component , khi ko add component đó sẽ ko bị thừa css đó.
2. CSS Module : Hoạt động độc lập , ko ảnh hưởng đến nhau khi đặt trùng tên class , hoạt động độc lập
  + Webpack sẽ  xử lý và export ra 1 object theo css module.
  + Ko kế thừa được css 
  + Ko thể css cho tag name được : * , h1 , h2 ... => vẫn bị ảnh hưởng chung .
  + camelCase : đặt tên  
3. Classnames: 
4. clsx: là 1 function(1.class, b. class) 
  + handle dynamic class; truyền object
    . clsx(styles.btn, {[styles.active] : true})

