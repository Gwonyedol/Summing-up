<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>age check</title>
</head>
<body>

<%
String str = request.getParameter("age");
int age = Integer.parseInt(str);

if(age>19){
	response.sendRedirect("ageok.jsp?age="+age);
}else{
	response.sendRedirect("agenope.jsp?age="+age);
}
%>

</body>
</html>