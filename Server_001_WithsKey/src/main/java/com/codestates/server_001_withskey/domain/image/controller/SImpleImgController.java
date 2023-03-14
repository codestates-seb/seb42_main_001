package com.codestates.server_001_withskey.domain.image.controller;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.UUID;

@RestController
@RequestMapping
public class SImpleImgController {

    @Value("${image.upload.path}")
    private String uploadPath;

    @Value("${resource.handler}")
    private String resourceHandler;
    @PostMapping("/admin/post/imageUpload")
    public void postImage(MultipartFile upload, HttpServletResponse res, HttpServletRequest req){

        OutputStream out = null;
        PrintWriter printWriter = null;

        res.setCharacterEncoding("utf-8");
        res.setContentType("text/html;charset=utf-8");

        try{

            UUID uuid = UUID.randomUUID();
            int idx = upload.getOriginalFilename().lastIndexOf(".");
            String ext = upload.getOriginalFilename().substring(idx+1);
            String extension = ext;


            byte[] bytes = upload.getBytes();

            // 실제 이미지 저장 경로
            String imgUploadPath = uploadPath + File.separator + uuid + "." + extension;

            // 이미지 저장
            out = new FileOutputStream(imgUploadPath);
            out.write(bytes);
            out.flush();

            // ckEditor 로 전송
            printWriter = res.getWriter();
            String callback = req.getParameter("CKEditorFuncNum");
            String fileUrl = "/admin/post/image/" + uuid + "." + extension;

            printWriter.println("<script type='text/javascript'>"
                    + "window.parent.CKEDITOR.tools.callFunction("
                    + callback+",'"+ fileUrl+"','이미지를 업로드하였습니다.')"
                    +"</script>");

            printWriter.flush();

        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            try {
                if(out != null) { out.close(); }
                if(printWriter != null) { printWriter.close(); }
            } catch(IOException e) { e.printStackTrace(); }
        }
    }
}
