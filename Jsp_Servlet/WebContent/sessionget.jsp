<%@page import="java.util.Iterator"%>
<%@page import="java.util.Enumeration"%>
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
		Object obj = session.getAttribute("myname");
		String mn = (String)obj;
		out.println("세션이름:myname");
		out.println("세션값:"+mn+"<br>");

		Object obj2 = session.getAttribute("yedol");
		String mn2 = (String)obj;
		out.println("세션이름:yedol");
		out.println("세션값:"+mn2+"<br>");
		
		out.println("----------------------------<br>");
		
		Enumeration e = session.getAttributeNames();
		
		
		while(e.hasMoreElements()){
			Object ov = e.nextElement();
			String ov2 = (String)ov;
			out.println("session이름:"+ov2+"<br>");
		};
		

	%>
</body>
</html>