package com.codestates.server_001_withskey.global.auditable;

import java.time.LocalDateTime;
import javax.persistence.Column;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

public abstract class Auditable {
    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createAt;

    @LastModifiedDate
    @Column(name="modified_at")
    private LocalDateTime modifiedAt;
}
