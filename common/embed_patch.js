// 해당 코드는 플래시 강제로 실행시키는 코드라고 함(이제는 사용할일 없는 코드임)

// /**
// * embed 패치 적용 컨테이너
// * null인경우 document 값을 기본으로 합니다
// * id값을 설정한경우 설정범위 내에만 적용이 됩니다
// * 
// * 본문이나 일부 노드에만 적용할경우 해당 노드의 id 값을 입력하실 수 있습니다
// * 예)
// * var __embed_target_id = "contents";
// * 로 처리한경우 body 내에 <태그 id="contents">플래쉬,동영상...</태그>
// * 안에 내용에만 패치가 적용됩니다
// */
// var __embed_target_id = null;

// /**
// * embed 패치를 적용할 태그를 설정합니다
// * 기본값은 object,eembed,appelt 태그입니다
// * false 값인경우 패치에서 제외됩니다
// */
// var __embed_tags = {object:true,embed:true,applet:true}

// /**
// * 이벤트 등록
// */
// if(document.attachEvent){
// 	document.attachEvent('onreadystatechange',
// 		function embed_patch(){
// 			if(__embed_target_id===null){
// 				var __target = document;
// 			}else{
// 				var __target = document.getElementById(__embed_target_id);
// 			}
// 			if (document.readyState == "complete"){
// 				function _replace(obj){
// 					var obj_re = document.createElement(obj.outerHTML);
// 					obj.parentNode.replaceChild(obj_re,obj);
// 				}
// 				function _inner(obj){
// 					obj.insertAdjacentHTML('beforeBegin',obj.outerHTML);			
// 					obj.parentNode.removeChild(obj);
// 				}
// 				if(__embed_tags.object===true){
// 					//object 패치
// 					var objs = __target.getElementsByTagName('object');
// 					var i = objs.length;
// 					while(i-->0){
// 						_inner(objs[i]);
// 					}
// 				}
// 				if(__embed_tags.embed===true){
// 					//embed 패치
// 					var objs = __target.getElementsByTagName('embed');
// 					var i = objs.length;
// 					while(i-->0){
// 						_replace(objs[i])
// 					}
// 				}
// 				if(__embed_tags.applet===true){
// 					//applet 패치
// 					var objs = __target.getElementsByTagName('applet');
// 					var i = objs.length;
// 					while(i-->0){
// 						_replace(objs[i])
// 					}
// 				}
// 			}
// 		}
// 	);
// }