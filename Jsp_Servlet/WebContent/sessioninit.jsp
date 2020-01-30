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
	
		session.setAttribute("myname", "myvalue");
		session.setAttribute("yedol", 9);
	%>
	<a href="sessionget.jsp">session get</a>
</body>
</html>