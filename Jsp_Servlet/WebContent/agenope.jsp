<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String str = request.getParameter("age");
int age = Integer.parseInt(str);
%>

나이가 <%= age %>군요.
미성년자는
돌아가세요ㅡㅡ


</body>
</html>