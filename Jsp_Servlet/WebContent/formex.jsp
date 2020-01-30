<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>formex result</title>
</head>
<body>
<%!
String name;
String id;
%>
<%
name=request.getParameter("name");
id=request.getParameter("id");

%>

이름:<%=name%>
아이디:<%=id %>

</body>
</html>