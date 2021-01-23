function Add(){
    var lin=document.getElementById("add").value;
    if(lin==''){
       alert("内容不能为空！");
       return;
    }
        var sp_item=document.createElement("span");
        var li=document.createElement("li");
        var td_item=document.getElementById("todolist");
        sp_item.innerHTML=lin;
        li.appendChild(sp_item);
        td_item.appendChild(li);
		var button=document.createElement("button");
		button.className="edit_button";
        button.innerText = "删除";
        button.onclick=function(){ 
            deleteItem(button);
        };
        var edit=document.createElement("button");
        edit.innerText = "修改";
		edit.className="edit_button";
        edit.onclick=function(){
            editItem(edit);
        }
        li.appendChild(button);
        li.appendChild(edit);
        td_item.appendChild(li);
        td_item.lastChild.appendChild(edit);
        document.getElementById("add").value='';
}
function deleteItem(a){
    a.parentNode.remove();
}
function editItem(edit){
    var li_item=document.createElement("li");
    var ip_item=document.createElement("input");
    ip_item.type="text";
	ip_item.className="item_box";
    ip_item.value=edit.parentNode.children[0].innerHTML;
    li_item.appendChild(ip_item);
    var sub=document.createElement("button");
    sub.innerText = "完成";
    sub.className="edit_button";
    sub.onclick=function(){
        var record=document.createElement("li");
        var content=ip_item;
        var rec=document.createElement("span");
        if(content.value==''){
           alert("修改内容不能为空！");
           return;
        }
            rec.innerHTML=content.value;
            record.appendChild(rec);
            var button=document.createElement("button");
            button.innerText = "删除";
			button.className="edit_button";
            button.onclick=function(){ 
                deleteItem(button);
            };
            record.appendChild(button);
            var edit=document.createElement("button");
            edit.innerText = "删除";
			edit.className="edit_button";
            edit.onclick=function(){
                editItem(edit);
            };
            record.appendChild(edit);
            sub.parentNode.parentNode.replaceChild(record,sub.parentNode);
    };
    li_item.appendChild(sub);
    edit.parentNode.parentNode.replaceChild(li_item,edit.parentNode);
}